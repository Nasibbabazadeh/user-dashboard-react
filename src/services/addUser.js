export default async function addUser(formData) {
    try {
        const response = await fetch(
            `https://aliakbar-fake-api.netlify.app/.netlify/functions/server/create-user`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formData,
                }),
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)

        return data
    } catch (error) {
        console.error('Error fetching users:', error.message)
        return []
    }
}
