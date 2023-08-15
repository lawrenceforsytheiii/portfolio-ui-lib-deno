import { Head } from "$fresh/runtime.ts";
import { h } from 'preact';
import { tw } from 'twind';
// import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";
import { StarField } from "../components/StarField/StarField.tsx";

export default function Home() {
  // const count = useSignal(3);
  return (
    <>
      <Head>
        <title>profile-ui-lib</title>
      </Head>
      <div class={tw`bg-black h-screen overflow-hidden flex justify-center items-center`}>
        <StarField />
      </div>
    </>
  );
}
