const LOGO = process.env.REACT_APP_APP_NAME

const SCREEN_TEXT = {
  test: 'Hello from Testing'
}

const ENVIRONMENT = {
  development: process.env.REACT_APP_ENVIRONMENT === 'development',
  production: process.env.REACT_APP_ENVIRONMENT === 'production'
}

const COMPANY_SOCIALS = [
  {
    link: '#',
    name: 'tw'
  },
  {
    link: '#',
    name: 'ig'
  },
  {
    link: '#',
    name: 'fb'
  }
]

const API = {
  baseURL: process.env.REACT_APP_API_URL,
  routes: {
    allBooks: '/',
    singleBooks: '/'
  },
  timeout: 60000
}

const COMPANY_LINKS = [
  {
    links: [
      {
        link: '#',
        name: 'iOS App Store'
      },
      {
        link: '#',
        name: 'Google Play Store'
      }
    ],
    name: 'Download'
  },

  {
    links: [
      {
        link: '#',
        name: 'Privacy Policy'
      },
      {
        link: '#',
        name: 'Terms of Service'
      }
    ],
    name: 'Legal'
  },
  {
    links: [
      {
        link: '#',
        name: 'Contact'
      },
      {
        link: '#',
        name: 'Help/FAQ'
      }
    ],
    name: 'Help'
  }
]

const constant = {
  API,
  COMPANY_LINKS,
  COMPANY_SOCIALS,
  ENVIRONMENT,
  LOGO,
  SCREEN_TEXT
}

export default constant
