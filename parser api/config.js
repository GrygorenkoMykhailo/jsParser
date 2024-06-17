module.exports = [
    {
        url: 'https://www.work.ua/jobs-remote-c%23/?experience=1',
        alias: 'Work.ua',
        branch: 'CSharp',
        selectors: [
            'h2.my-0 a',
        ],
        replicaName: 'workuacsharp',
    },
    {
        url: 'https://www.work.ua/jobs-remote-php/?experience=1',
        alias: 'Work.ua',
        branch: 'PHP',
        selectors: [
            'h2.my-0 a',
        ],
        replicaName: 'workuaphp',
    },
    {
        url: 'https://www.work.ua/jobs-remote-javascript/?experience=1',
        alias: 'Work.ua',
        branch: 'Javascript',
        selectors: [
            'h2.my-0 a',
        ],
        replicaName: 'workuajs',
    },
    // {
    //     url: 'https://robota.ua/zapros/javascript/ukraine?scheduleIds=3&experienceType=true',
    //     alias: 'Robota.ua',
    //     branch: 'Javascript',
    //     selectors: [
    //         'h2',
    //     ],
    //     replicaName: 'robotauajs',
    // },
    // {
    //     url: 'https://robota.ua/zapros/php/ukraine?scheduleIds=3&experienceType=true',
    //     alias: 'Robota.ua',
    //     branch: 'PHP',
    //     selectors: [
    //         'h2',
    //     ],
    //     replicaName: 'robotauaphp',
    // },
    // {
    //     url: 'https://robota.ua/zapros/c%2523/ukraine?scheduleIds=3&experienceType=true',
    //     alias: 'Robota.ua',
    //     branch: 'CSharp',
    //     selectors: [
    //         'h2',
    //     ],
    //     replicaName: 'robotauacsharp',
    // },
    {
        url: 'https://djinni.co/jobs/?primary_keyword=Laravel&exp_level=no_exp',
        alias: 'Djinni.co',
        branch: 'PHP',
        selectors: [
            'a.job-list-item__link',
        ],
        replicaName: 'djinniphp',
    },
    {
        url: 'https://djinni.co/jobs/?primary_keyword=JavaScript&exp_level=no_exp',
        alias: 'Djinni.co',
        branch: 'Javascript',
        selectors: [
            'a.job-list-item__link',
        ],
        replicaName: 'djinnijs',
    },
    {
        url: 'https://djinni.co/jobs/?primary_keyword=.NET&exp_level=no_exp',
        alias: 'Djinni.co',
        branch: 'Csharp',
        selectors: [
            'a.job-list-item__link',
        ],
        replicaName: 'djinnicsharp',
    },

    
]