const RefreshAuth = (cookie?: string) =>
  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL!}/user/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(!!cookie && { Cookie: cookie }),
    },
  });

export default RefreshAuth;
