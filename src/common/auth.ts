export const handleActions = ({
  accessToken,
  user,
}: {
  accessToken: string;
  user: boolean;
}) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      accessToken: accessToken,
      user: user,
    })
  );
};
