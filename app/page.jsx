import UseReducer from "@/components/UseReducer";
import UseMemo from "@/components/UseMemo";
import UseRef from "@/components/UseRef";
import UseCallback from "@/components/UseCallback";
import UseHookUser from "@/components/UseHookUser";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <UseCallback/> */}
      <UseHookUser />
    </main>
  );
}
