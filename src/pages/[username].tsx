import User from "@/components/User";

export const getServerSideProps = async (context: any) => {
  const username = context.query.username;
  return { props: { username } };
};

export default function Profile({ username }: { username: string }) {
  return <User username={username} />;
}
