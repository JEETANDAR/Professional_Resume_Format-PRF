export default function ClientsLogo({clientsSite, clientsLogo, clientsALT}) {
  return (
    <>
      <li class="clients-item">
        <a href={clientsSite}>
          <img src={clientsLogo} alt={clientsALT} />
        </a>
      </li>
    </>
  );
}
