function handler(req, res) {
  res.status(200).json({
    data: [
      {
        id: 1000,
        name: "Sezer Bölük",
        country: {
          name: "Türkiye",
          code: "TR",
        },
        company: "Niltek Yazılım",
        date: "2022-01-01",
        status: "Aktif",
        job: "Genel Cerrahi",
        age: 26,
        // cinsiyet  ing
        gender: "Erkek",
      },
      {
        id: 1002,
        name: "Cebrail Ayık",
        country: {
          name: "Türkiye",
          code: "TR",
        },
        company: "Niltek Yazılım",
        date: "2022-01-02",
        status: "Aktif",
        job: "Beyin Cerrahi",
        age: 26,
        // cinsiyet  ing
        gender: "Erkek",
      },
      {
        id: 1002,
        name: "Osman Safa",
        country: {
          name: "Türkiye",
          code: "TR",
        },
        company: "Niltek Yazılım",
        date: "2022-01-06",
        status: "Aktif",
        job: "Nöroloji",
        age: 26,
        // cinsiyet  ing
        gender: "Erkek",
      },

      {
        id: 1002,
        name: "Ebru Evcin",
        country: {
          name: "Türkiye",
          code: "TR",
        },
        company: "Niltek Yazılım",
        date: "2022-01-06",
        status: "Aktif",
        job: "Nöroloji",
        age: 26,
        // cinsiyet  ing
        gender: "Kadın",
      },
    ],
  })
}

export default handler
