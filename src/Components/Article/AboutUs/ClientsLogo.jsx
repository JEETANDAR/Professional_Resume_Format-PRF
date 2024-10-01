export default function ClientsLogo({clientsSite, clientsLogo, clientsALT}) {
  return (
    <>
      <li className="clients-item">
        <a href={clientsSite}>
          <img src={clientsLogo} alt={clientsALT} />
        </a>
      </li>
    </>
  );
}
