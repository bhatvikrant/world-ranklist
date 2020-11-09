import Head from "next/head";
import Link from "next/link";

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
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>
			</header>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>Vikrant Bhat</footer>
		</div>
	);
};

export default Layout;
