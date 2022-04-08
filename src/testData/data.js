// Import data object to simulate response from the backend
// Feel free to modify the values of the data for testing
// Do NOT change the structure or namings of the objects without letting everyone know

export const data = {
  users: [
    {
      uuid: 20,
      slug: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: '123',
      birthday: '01/01/2001',
      followers: [1, 23, 1004],
      following: [2, 3, 10],
      location: {
        zip: '11111',
        city: 'New York',
        state: 'New York',
        country: 'US',
      },
      user_type: 'artist',
      blocked_ids: [12, 13, 49],
    }
  ],
  events: [
    {
      date: {
        date: '01/02/2022',
        time: '20:20',
        timeZone: 'UTC',
      },
      location: '10-10 10th street realLocation',
      url: 'randomZoom.com',
      title: 'Example title',
      description: 'This is a super important event',
      attendees: [12, 20, 30],
      organizers: [123, 312, 3],
    },
  ],
  appointments: [
    {
      date: {
        date: '01/02/2022',
        time: '20:20',
        timeZone: 'UTC',
      },
      chatId: 12,
      title: 'Cool appointment',
      description: 'This is a super important appointment',
      attendees: [123, 3123],
    }
  ],
  chats: [
    {
      uuid: 12,
      organizer: 20,
      attendees: [43, 9],
    }
  ],
  galleries: [
    {
      uuid: 90,
      ownerId: 20,
      postIds: [32, 5345, 65, 64]
    }
  ],
  posts: [
    {
      uuid: 23,
      publisherId: 20,
      image: 'photo.com',
      description: 'Check out my new cool artwork',
      commentIds: [213, 321, 32]
    }
  ],
  comments: [
    {
      uuid: 123,
      ownerId: 20,
      text: 'Really cool art',
      date: {
        date: '01/02/2022',
        time: '20:20',
        timeZone: 'UTC',
      },
    }
  ],
}