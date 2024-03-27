import building from './img/building.jpg'
import agreement from './img/agreement.jpg'
import buildingTwo from './img/building-two.jpg'
import contract from './img/contract.jpg'
import mail from './img/mail.jpg'
import sign from './img/sign.jpg'
import usa from './img/usa.jpg'

export const products = [
    {
      id: 1,
      name: 'Compliance Reminder',
      category: '',
      href: 'product/compliance-reminder',
      price: 'Free',
      imageSrc: agreement,
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
      id: 2,
      name: 'Registered Agent',
      category: '',
      color: 'Black',
      price: '',
      href: '/product/compliance-reminder',
      imageSrc: buildingTwo,
      imageAlt: 'Compliance reminder'
    },
    {
      id: 6,
      name: 'Certificate of Good Standing',
      category: '',
      color: 'Black',
      price: '',
      href: 'product/certificate-of-good-standing',
      imageSrc: building,
      imageAlt: 'Certificate of good standing'
    },
    {
      id: 7,
      name: 'Renewal and Revival',
      category: '',
      color: 'Black',
      price: '',
      href: 'product/renewal-and-revival',
      imageSrc: contract,
      imageAlt: 'Renewal and revival'
    },
  ]