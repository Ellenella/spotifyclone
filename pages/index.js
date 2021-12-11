import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Player from "../components/Player";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      {/* <h1>This is a Spotify application</h1>*/}
      <main className="flex">
        {/*Sidebar */}
        <Sidebar />
        <Center />
        {/*Center */}
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
