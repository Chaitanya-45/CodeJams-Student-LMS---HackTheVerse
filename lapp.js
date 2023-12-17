// Mock data for the leaderboard (replace with actual data)
const leaderboardData = [
    { rank: 1, user: 'JohnDoe', points: 500 },
    { rank: 2, user: 'JaneSmith', points: 480 },
    { rank: 3, user: 'Coder123', points: 450 },
    // Add more data as needed
];

// Function to populate the leaderboard table
function populateLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboardBody');

    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.user}</td>
            <td>${entry.points}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

// Call the function to populate the leaderboard on page load
window.onload = populateLeaderboard;

function goToCoursesPage() {
    window.location.href = 'profile.html'; // Replace with the actual URL of your courses page
}