export default function Layout({ children }) {
	return <div style={{
		display: 'flex',
		flexDirection: 'row',
		height: '100vh',
		width: '100vw'
	}}>{children}</div>;
}