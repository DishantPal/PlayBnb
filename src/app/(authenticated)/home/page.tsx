'use client'

import { Prisma } from '@prisma/client'
import { Typography, List, Card, Spin } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ListPlacePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: places, isLoading, refetch } = Api.place.findMany.useQuery({})

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Available Places</Title>
      <Paragraph>Choose a place to book from the list below:</Paragraph>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={places}
        renderItem={(
          place: Prisma.PlaceGetPayload<{ include: { owner: true } }>,
        ) => (
          <List.Item>
            <Card
              title={place.name}
              extra={<EnvironmentOutlined />}
              onClick={() => router.push(`/places/${place.id}`)}
            >
              <Text>{place.description}</Text>
              <br />
              <Text type="secondary">{place.location}</Text>
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
