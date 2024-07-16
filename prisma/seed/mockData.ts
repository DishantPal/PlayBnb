import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('b350b579-97ec-4831-8c42-96b1b772240e', '1Pauline_Sipes61@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_67890', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('f4f598ec-cad5-4395-817f-a1ea9134e053', '7Lucius_Wiegand@yahoo.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=9', 'cus_fghij', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('f9e8fb49-c47a-441b-a492-139dede370d5', '13Wendell_Lynch60@gmail.com', 'Daisy', 'https://i.imgur.com/YfJQV5z.png?id=15', 'cus_fghij', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('8a152aa8-1bcc-45d8-857f-07a3bfee8607', '19Jamal42@yahoo.com', 'Ethan', 'https://i.imgur.com/YfJQV5z.png?id=21', 'cus_67890', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('d7e93913-9135-4c23-8d53-f3555f08664e', '31Bessie30@hotmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=33', 'cus_12345', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('0296e688-b12f-49ce-bd7f-c491ffbf9554', '37Kaleb80@hotmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=39', 'cus_abcde', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('5ac065a4-1765-4de5-8b97-228380fd54eb', '43Brooke.Wilkinson@hotmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_12345', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('0638f4bf-b675-498e-8f52-8c579752b3b1', '49Garland98@yahoo.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=51', 'cus_abcde', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('e2ffcd54-720f-4692-8de5-64f40e7edad8', '55Jerrod29@hotmail.com', 'Daisy', 'https://i.imgur.com/YfJQV5z.png?id=57', 'cus_67890', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('a20b49bd-8d78-49dc-9d15-efc82bf99f55', 'Sunny Park', 'An indoor play area with games and activities for all ages.', '202 Cedar Boulevard', 'f9e8fb49-c47a-441b-a492-139dede370d5');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('477c9f0b-ed3e-4f1b-b5f9-5867efd03105', 'Kids Fun Zone', 'An indoor play area with games and activities for all ages.', '123 Maple Street', 'e2ffcd54-720f-4692-8de5-64f40e7edad8');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('3f87fa62-83df-471f-af10-bda2b47883ea', 'Sunny Park', 'A large park with plenty of open space and playground equipment.', '202 Cedar Boulevard', 'f9e8fb49-c47a-441b-a492-139dede370d5');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('a30d458a-3601-4214-a64f-b569d76ebbbd', 'Sunny Park', 'A themed playground with interactive elements and creative play zones.', '456 Oak Avenue', '0296e688-b12f-49ce-bd7f-c491ffbf9554');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('5684bf5c-058e-4855-9feb-3f8bd3c07e14', 'Sunny Park', 'An indoor play area with games and activities for all ages.', '123 Maple Street', 'd7e93913-9135-4c23-8d53-f3555f08664e');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('10a6a15d-5ec1-42c5-95e5-f4b69d38bc5f', 'Adventure Playground', 'An indoor play area with games and activities for all ages.', '123 Maple Street', 'e2ffcd54-720f-4692-8de5-64f40e7edad8');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('865b2126-2d0c-4d3c-9f61-625a8524be90', 'Sunny Park', 'A nature trail with educational stops and play areas.', '789 Pine Road', 'e2ffcd54-720f-4692-8de5-64f40e7edad8');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('c904ef7a-463d-48ee-a69a-ed02298f6ee8', 'Little Explorers', 'An indoor play area with games and activities for all ages.', '202 Cedar Boulevard', '5ac065a4-1765-4de5-8b97-228380fd54eb');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('5e2d91d1-917b-45f4-9496-2a8c0fc5b1d9', 'Little Explorers', 'A nature trail with educational stops and play areas.', '123 Maple Street', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Place" ("id", "name", "description", "location", "ownerId") VALUES ('f6731da6-c54a-4822-827f-b0c154aebc20', 'Happy Trails', 'A nature trail with educational stops and play areas.', '789 Pine Road', '0638f4bf-b675-498e-8f52-8c579752b3b1');

INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('c5513d9d-8fb3-4d93-8269-0eeaf6708631', '2024-10-01T16:25:57.952Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '865b2126-2d0c-4d3c-9f61-625a8524be90');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('93d9a811-605f-4269-8dae-966d0faf2a72', '2024-08-06T14:14:40.724Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5684bf5c-058e-4855-9feb-3f8bd3c07e14');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('20c2a0b3-7c2c-40ee-a7d1-99d2516c38d5', '2025-04-01T00:49:40.937Z', 'f4f598ec-cad5-4395-817f-a1ea9134e053', '5684bf5c-058e-4855-9feb-3f8bd3c07e14');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('636ca8f3-5fc2-4129-a1ac-6f5d6934ab3b', '2024-09-02T22:26:13.155Z', 'b350b579-97ec-4831-8c42-96b1b772240e', '865b2126-2d0c-4d3c-9f61-625a8524be90');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('8de0bbda-5855-4be2-8282-6b2ab992845e', '2024-07-17T00:37:14.724Z', '0638f4bf-b675-498e-8f52-8c579752b3b1', 'a20b49bd-8d78-49dc-9d15-efc82bf99f55');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('b8b48d20-a359-497a-8911-eb6b1f383275', '2024-09-07T10:02:24.621Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5684bf5c-058e-4855-9feb-3f8bd3c07e14');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('1f473917-3d6d-490c-8413-f407053433ae', '2024-10-15T02:21:46.171Z', 'e2ffcd54-720f-4692-8de5-64f40e7edad8', '477c9f0b-ed3e-4f1b-b5f9-5867efd03105');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('26ee4074-bebc-4637-8d2e-240578702768', '2023-08-14T06:49:52.490Z', 'e2ffcd54-720f-4692-8de5-64f40e7edad8', '5e2d91d1-917b-45f4-9496-2a8c0fc5b1d9');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('07c463ea-d594-450c-9590-95f8e6caaf2e', '2025-06-14T15:19:23.534Z', 'e2ffcd54-720f-4692-8de5-64f40e7edad8', '5684bf5c-058e-4855-9feb-3f8bd3c07e14');
INSERT INTO "Booking" ("id", "bookingDate", "userId", "placeId") VALUES ('7a1aec86-dd9a-4322-8a6b-752706ad429d', '2025-01-21T11:15:48.979Z', '8a152aa8-1bcc-45d8-857f-07a3bfee8607', 'a30d458a-3601-4214-a64f-b569d76ebbbd');

INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('3328c39a-363a-4914-833f-925cd7750f5d', 841, 'Amazing place Will definitely come back.', '0296e688-b12f-49ce-bd7f-c491ffbf9554', '865b2126-2d0c-4d3c-9f61-625a8524be90');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('274a9951-76b8-4344-a0c7-9c65ab51735e', 370, 'Amazing place Will definitely come back.', 'f4f598ec-cad5-4395-817f-a1ea9134e053', 'a30d458a-3601-4214-a64f-b569d76ebbbd');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('6bc076a6-4bd0-4b18-930f-6ba19437f457', 527, 'Not as expected a bit boring.', '0638f4bf-b675-498e-8f52-8c579752b3b1', '865b2126-2d0c-4d3c-9f61-625a8524be90');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('59cf7bcd-43ae-45cb-8f00-c21365099fb3', 828, 'Had a great time lots of fun', 'f4f598ec-cad5-4395-817f-a1ea9134e053', '865b2126-2d0c-4d3c-9f61-625a8524be90');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('12f35871-64f1-4544-a105-f975a87917d5', 617, 'Amazing place Will definitely come back.', 'f9e8fb49-c47a-441b-a492-139dede370d5', 'a20b49bd-8d78-49dc-9d15-efc82bf99f55');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('bb84512a-ce13-4f34-be38-2ada0cb8cc9f', 168, 'The place was okay but could be cleaner.', 'f4f598ec-cad5-4395-817f-a1ea9134e053', '10a6a15d-5ec1-42c5-95e5-f4b69d38bc5f');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('5f3d888d-0077-41d8-9eca-f99b3aa4b71a', 310, 'Not as expected a bit boring.', '5ac065a4-1765-4de5-8b97-228380fd54eb', '5e2d91d1-917b-45f4-9496-2a8c0fc5b1d9');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('046b8c40-c2c5-406c-894d-0d4bf70c1638', 412, 'Amazing place Will definitely come back.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3f87fa62-83df-471f-af10-bda2b47883ea');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('9433743a-ce6f-4833-86f4-e3ebfa219ccb', 508, 'Had a great time lots of fun', 'b350b579-97ec-4831-8c42-96b1b772240e', '10a6a15d-5ec1-42c5-95e5-f4b69d38bc5f');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "placeId") VALUES ('60a5fb4a-79e5-4557-b6e2-29f88925c987', 45, 'My friends and I had a blast', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a30d458a-3601-4214-a64f-b569d76ebbbd');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
