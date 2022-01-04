function Header() {
    return (
        <nav className="green darken-1">
            <div class="nav-wrapper">
                <a
                    href="https://ireull.github.io/reactfilms"
                    class="brand-logo"
                >
                    Movies
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/ireull">MyRepo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
