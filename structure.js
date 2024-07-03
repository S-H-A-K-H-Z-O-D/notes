// Ro'yhatdan o'tish
// request => .../notes/sign-up

const signup= {
  email: "string",
  username: "string",
  password: "string",
  password_confirmation: "string",
}

// Hisobga kirish
// request => .../notes/sign-in

const signip= {
  username: "string",
  password: "string",
}

// Parolni aniqlash
// request => .../notes/find-password

const find_password = {
  email: "string",
}

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// Qayd mavzulari
// GET request => .../notes/titles?search=

const titles = [
  {
    id: "uuid",
    title_name: "string",
  }
]

// POST request => .../notes/titles

const titles_post_body =  {
  title_name: "string",
}

// PUT request => .../notes/titles/${id}

const titles_put_body =  {
  title_name: "string",
}


// DELETE request => .../notes/titles/${id}

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// Mavzuga doir qaydlar
// GET request => .../notes/notes

const notes = {
  title_id: "string",
  notes: [
    {
      id: "uuid",
      note: "string",
    }
  ]
}

// POST request => .../notes/notes

const note_post_body =  {
  title_id: "string",
  note: "string",
}

// PUT request => .../notes/note/${id}

const note_put_body =  {
  title_id: "string",
  note: "string",
}


// DELETE request => .../notes/note/${id}

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// Profil ma'lumotlarini o'zgartirish
// GET request => .../notes/user-profile

const user_info = {
  email: "string",
  username: "string",
}

// POST request => .../notes/user-profile

const user_info_change = {
  email: "string",
  username: "string",
}

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// Parolni o'zgartirish
// POST request => .../notes/change-password

const change_password_body = {
  password: "string",
  password_confirmation: "string",
  new_password: "string",
}