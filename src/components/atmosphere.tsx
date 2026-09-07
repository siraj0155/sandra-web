export function Atmosphere({ scan = false }: { scan?: boolean }) {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="mesh" />
      {scan ? <div className="scan" /> : null}
    </div>
  );
}
