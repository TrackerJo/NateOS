import "./kazoom-reviews-page.css"

function KazoomReviewsPage() {

    return (
        <div className="chrome-page-content">
            <h1>Kazoom Reviews</h1>
            <div className="cards">
                <div className="card">
                    <label className="title">Why?</label>
                    <p>Kazoom Reviews was made for my mom who didn't like how many of the reviews found on restaurants were fake. So I created a website where you would only see your friends reviews in hopes that their reviews would be more truthfull than strangers reviews</p>

                </div>
                <div className="card">
                    <label className="title">How?</label>
                    <p>Built using React and Firebase. Users can either add restaurants manually or use a search bar to search the name of the restuarant and the Yelp API is used to fill in the rest of the information. Users can set the type of reviews they can see between Everyone, Friends, or people with similar food interests. Users can set their food interests in the settings page</p>

                </div>
                <div className="card">
                    <label className="title">Concepts Learned</label>
                    <ul>
                        <li>Sorting and filtering results from Firebase</li>
                        <li>Using an external API via HTTPS requests (Yelp API)</li>
                        <li>Using a custom domain with Github Pages</li>


                    </ul>
                </div>
            </div>
            <button   onClick={() => {
                window.open("https://trackerjo.github.io/KazoomReviews/", "_blank")
            }}>View website here</button>
            <br />
        </div>
    )

}

export default KazoomReviewsPage