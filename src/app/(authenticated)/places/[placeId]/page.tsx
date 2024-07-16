'use client'

import { Typography, Button, Card, Row, Col, Spin, Rate, Space } from 'antd'
import { BookOutlined, CommentOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PlaceDetailsPage() {
  const router = useRouter()
  const params = useParams<{ placeId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: place,
    isLoading,
    refetch,
  } = Api.place.findUnique.useQuery({
    where: { id: params.placeId },
    include: { reviews: { include: { user: true } }, bookings: true },
  })

  const { mutateAsync: createBooking } = Api.booking.create.useMutation()

  const handleBooking = async () => {
    try {
      await createBooking({
        data: {
          placeId: place?.id,
          userId: user?.id,
          bookingDate: new Date().toISOString(),
        },
      })
      enqueueSnackbar('Booking successful!', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Booking failed. Please try again.', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{place?.name}</Title>
      <Paragraph>{place?.description}</Paragraph>
      <Text strong>Location:</Text> <Text>{place?.location}</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Button
            type="primary"
            icon={<BookOutlined />}
            onClick={handleBooking}
          >
            Book Now
          </Button>
        </Col>
      </Row>
      <Title level={3} style={{ marginTop: '40px' }}>
        Reviews
      </Title>
      <Row gutter={[16, 16]}>
        {place?.reviews?.map(review => (
          <Col span={24} key={review.id}>
            <Card>
              <Space direction="vertical">
                <Rate disabled defaultValue={review.rating} />
                <Paragraph>{review.comment}</Paragraph>
                <Text type="secondary">
                  By {review.user?.name} on{' '}
                  {dayjs(review.dateCreated).format('MMMM D, YYYY')}
                </Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
