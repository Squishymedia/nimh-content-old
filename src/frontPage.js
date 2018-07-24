// openneuro image assets
import logo from './assets/nido.png'
import dsst from './assets/data-science-and-sharing-team.png'
import fmrif from './assets/fmrif.png'
import nih from './assets/nih.png'
import dhhs from './assets/dhhs.png'
import squishymedia from './assets/squishymedia.png'
import icon from './assets/favicon.ico'


export default {
  pageTitle: 'NIDO',
  copyright: {
    holder: 'National Institute of Mental Health',
  },
  pageDescription:
    'NIMH Intramural Data-sharing with OpenNeuro',
  titlePanel: {
    logos: [
      {
        class: 'logo-layer-users',
        src: logo,
        alt: 'NIMH Intramural Data-sharing with OpenNeuro',
      },
    ],
    logoText: false,
    privacyDetail: 'This is a U.S. Government computer system, which may be accessed and used only for authorized Government business by authorized personnel. Unauthorized access or use of this computer system may subject violators to criminal, civil, and/or administrative action. All information on this computer system may be intercepted, recorded, read, copied, and disclosed by and to authorized personnel for official purposes, including criminal investigations. Such information includes sensitive data encrypted to comply with confidentiality and privacy requirements. Access or use of this computer system by any person, whether authorized or unauthorized, constitutes consent to these terms. There is no right of privacy in this system.',
    privacyLink: 'https://www.nimh.nih.gov/site-info/privacy-notice.shtml',
  },
  navBar: {
    brand: {
      text: {
        first: "NIDO",
        second: ""
      }
    }
  },
  frontPageExtras: false,
  collaborators: false,
  support: [
    {
      title: 'Data Science and Sharing Team',
      alt: 'Data Science and Sharing Team',
      logo: dsst,
      link: 'https://cmn.nimh.nih.gov/',
      width: 4,
      offset: 0,
    },
    {
      title: 'FMRIF',
      alt: 'Functional Magnetic Resonance Facility',
      logo: fmrif,
      link: 'https://www.fmrif.nimh.nih.gov/',
      width: 4,
      offset: 0,
    },
    {
      title: 'HHS',
      alt: 'Department of Health and Human Services',
      logo: dhhs,
      link: 'https://www.hhs.gov/',
      width: 2,
      offset: 1,
    },
    {
      title: 'NIH',
      alt: 'National Institute of Mental Health',
      logo: nih,
      link: 'https://www.nimh.nih.gov/labs-at-nimh/index.shtml',
      width: 3,
      offset: 3,
    },
    {
      title: 'Squishymedia',
      alt: 'Squishymedia',
      logo: squishymedia,
      link: 'https://squishymedia.com',
      width: 3,
      offset: 0,
    },
  ],
}