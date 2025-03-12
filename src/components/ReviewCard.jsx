const ReviewCard = () => {

    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    review text
                </p>
                <strong>
                    Vote: review vote
                </strong>
                <address><i>
                    By reviewer name
                </i></address>
            </div>
        </div>
    )
}

export default ReviewCard