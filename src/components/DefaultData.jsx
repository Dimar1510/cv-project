const defaultPersonal = {
    name: 'Name LastName',
    email: 'notrealemail@email.com',
    phone: '1234567890',
    address: 'Some City, Country'
}

const defaultEducations = [
    {
        school: 'University number one',
        degree: 'Designer',
        start: '2015',
        end: '2020',
        location: 'Some City, Country',
        id: crypto.randomUUID()
    },
    {
        school: 'College of doing things',
        degree: 'Performer',
        start: '2020',
        end: '2026',
        location: 'Nowhere, Idk',
        id: crypto.randomUUID()
    }
]

const defaultProfessions = [
    {
        company: 'Company Two',
        position: 'Things operator',
        start: '2026',
        end: 'present',
        location: 'Lands Between',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus et dolore repellat eos ea ratione doloribus sit iure ipsa omnis voluptate veniam, eius excepturi nihil, impedit aliquid, soluta illo nisi.',
        id: crypto.randomUUID() 
    },
    {
        company: 'Company One',
        position: 'Assistant',
        start: '2020',
        end: '2026',
        location: 'Some City, Country',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores, nam rem placeat dolore minima quis dolorem distinctio maiores officia ipsum vel, inventore voluptate sunt facilis expedita nisi qui deleniti.',
        id: crypto.randomUUID() 
    }
]

export { defaultPersonal, defaultEducations, defaultProfessions }