function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="inner-container footer-container p-1">
            <p className="text-xs text-right w-full opacity-50">
                Copyright &copy; {currentYear} AdyGreg.com
            </p>
        </footer>
    )
}

export default Footer;
