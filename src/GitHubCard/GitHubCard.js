import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
    return (
        <div>
            <Card>
                <Card.img variant="top" src="https://placekitten.com/100/100" />
                <Card.Body>
                    <Card.Title>nelsonjf</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Pretium lectus quam id leo in vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard