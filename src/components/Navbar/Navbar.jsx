// Named exports
export const foo = 20;
export const foo2 = 20;
export const foo3 = 20;

// Default exports
export default function Navbar({ title }) {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
      </div>
    </nav>
  )
}
