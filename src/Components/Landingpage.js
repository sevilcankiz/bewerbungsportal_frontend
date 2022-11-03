
export default function Landingpage({ isAuthenticated, user }) {
  console.log(isAuthenticated, user);
  return (
    <div className="landingpage">
      { isAuthenticated && user ? (
        <>
          <h2>Willkommmen, {user.firstName}!</h2>
          <p>Sie können hier nach aktuellen Jobangeboten in Ihrer Region suchen und Ihre Bewerbungsdokumente hochladen!</p>
          <h1>Viel Spaß!</h1>
                     
        </>
          ) : (
        <>
          <h2>Willkommmen beim Bewerbungsportal</h2>
          <p>Sie können hier nach aktuellen Jobangeboten in Ihrer Region suchen und Ihre Bewerbungsdokumente hochladen!</p>
          <h1>Viel Spaß!</h1>
        </>
        )}
    </div>
  );
}
