import styles from "./Navigation.module.css";
const Navigation = () => {
  console.log(styles); // {navigation: "Navigation_navigation__1QY5u"}
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/logo.png" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>

    </nav>
  );
};

export default Navigation