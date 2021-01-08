enum Route {
  MochiNight = '/mochi-night',
  StoreId = '/storeId',
  Home = '/',
  HomeV2 = '/v2',
  Contact = '/contact',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  ResetPassword = '/get-reset-password-email',
  CheckoutCart = '/checkout/cart',
  CheckoutInformation = '/checkout/information',
  CheckoutPayment = '/checkout/payment',
  Feedback = '/feedback',
  LastOrder = '/last-order',
  Onboarding = '/onboarding',
  PublicSEO = '/SEO',
  PublicIcons = '/SEO/icons',
  PublicCards = '/SEO/cards',
  PublicLandingPage = '/images/landing-page',
  FAQ = '/faq',
  Settings = '/settings',
  Orders = '/orders',
  OrderStatus = '/orders/status',
}

export type TRoute = Route;

export default Route;
