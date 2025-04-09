const Home = () => {
    return <div className="Home-page">
        <h2>Home</h2>
        <div className="para-container">
            <p>
                Welcome to the home page! This is a sample paragraph created purely for testing purposes. Here you can imagine showcasing your website’s introduction, mission, or a warm welcome message to your users. The purpose of this content is to help visualize how routing transitions and page components work using React Router.</p>

            <p>Feel free to add more components, animations, or links as you expand your project. This page serves as the starting point, guiding visitors to explore other parts of your site like About, Services, or Contact.
            </p>
        </div>

        <div className="para-container">
            <p>This is just a secondary block of content to ensure multi-paragraph rendering works as expected on your home page. It helps you test spacing, typography, and consistency across different sections. You can replace this later with real content or leave it for layout balance.</p>
        </div>
    </div>
}

export default Home;