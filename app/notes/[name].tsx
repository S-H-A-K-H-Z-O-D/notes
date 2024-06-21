// pages/notes/[name].tsx
import { useRouter } from "next/router";

const Notes = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Note: {name}</h1>
      {/* Render your note content based on the name parameter */}
    </div>
  );
};

export default Notes;
