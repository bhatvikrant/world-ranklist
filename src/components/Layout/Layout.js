import Head from "next/head";

// STYLES
import styles from "./Layout.module.css";

// LOGO
import Logo from "./logo.svg";

const Layout = ({ children, title = "World Ranklist" }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<Logo />
			</header>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>Vikrant Bhat</footer>
		</div>
	);
};

export default Layout;
