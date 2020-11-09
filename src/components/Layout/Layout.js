import {useState, useEffect} from 'react'

import Head from "next/head";
import Link from "next/link";

// STYLES
import styles from "./Layout.module.css";

// ICONS
import { Brightness6Rounded } from "@material-ui/icons";

// LOGO
import Logo from "./logo.svg";

const Layout = ({ children, title = "World Ranklist" }) => {

	const [theme, setTheme] = useState('light');
			

	useEffect(() =>{
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
setTheme(localStorage.getItem('theme'));
	}, [])

	const switchTheme = () => {
		if(theme ==="light") {
			saveTheme('dark')
		}else{
			saveTheme('light')
		}
	}

	const saveTheme = theme => {
		setTheme(theme)
			localStorage.setItem('theme', theme)
			document.documentElement.setAttribute('data-theme', theme)
	}
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

				<button className={styles.themeSwitcher} onClick={switchTheme}>
					<Brightness6Rounded />
				</button>
			</header>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>Vikrant Bhat</footer>
		</div>
	);
};

export default Layout;
