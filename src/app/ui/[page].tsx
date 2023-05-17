import { useRouter } from "next/router";

function UserProfile() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Profil utilisateur: {id}</h1>
      <p>
        Cette page est dynamique et rendue en fonction de l'ID de l'utilisateur
        les clients et les gp n'auront pas le meme UI
      </p>
    </div>
  );
}

export default UserProfile;
