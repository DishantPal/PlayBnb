'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Form, Input, Button, Typography, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
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

  const { mutateAsync: createPlace } = Api.place.create.useMutation()

  const [loading, setLoading] = useState(false)

  const onFinish = async (values: Prisma.PlaceCreateInput) => {
    setLoading(true)
    try {
      await createPlace({
        data: {
          ...values,
          owner: { connect: { id: user.id } },
        },
      })
      enqueueSnackbar('Place listed successfully!', { variant: 'success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to list place. Please try again.', {
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
          <Title level={2}>List Your Place for Play</Title>
          <Text>
            Fill in the details below to make your place available for other
            kids to book.
          </Text>
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ marginTop: '20px' }}
          >
            <Form.Item
              name="name"
              label="Place Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter the name of the place',
                },
              ]}
            >
              <Input placeholder="Enter the name of the place" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: 'Please enter a description' },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Enter a description of the place"
              />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: 'Please enter the location' }]}
            >
              <Input placeholder="Enter the location of the place" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<PlusOutlined />}
              >
                List Place
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
