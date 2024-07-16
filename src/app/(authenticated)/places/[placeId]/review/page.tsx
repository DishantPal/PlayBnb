'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Rate, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ReviewPage() {
  const router = useRouter()
  const params = useParams<{ placeId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: createReview } = Api.review.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: {
    rating: number
    comment: string
    image: File
  }) => {
    setLoading(true)
    try {
      const imageUrl = values.image
        ? (await upload({ file: values.image })).url
        : undefined
      await createReview({
        data: {
          rating: values.rating,
          comment: values.comment,
          userId: user.id,
          placeId: params.placeId,
          imageUrl,
        },
      })
      enqueueSnackbar('Review submitted successfully!', { variant: 'success' })
      router.push(`/places/${params.placeId}`)
    } catch (error) {
      enqueueSnackbar('Failed to submit review. Please try again.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Review a Place</Title>
          <Paragraph>
            Share your experience with others by reviewing this place.
          </Paragraph>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true, message: 'Please provide a rating' }]}
            >
              <Rate />
            </Form.Item>
            <Form.Item
              name="comment"
              label="Comment"
              rules={[{ required: true, message: 'Please provide a comment' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="image"
              label="Upload an Image (optional)"
              valuePropName="file"
            >
              <Input type="file" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit Review
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
