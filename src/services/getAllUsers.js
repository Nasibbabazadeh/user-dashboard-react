export default async function fetchAllUsers() {
    try {
        const response = await fetch(
            `https://aliakbar-fake-api.netlify.app/.netlify/functions/server/users`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()

        return data
    } catch (error) {
        console.error('Error fetching users:', error.message)
        return []
    }
}
