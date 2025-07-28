using { demoTahaApp as my } from '../db/schema.cds';

@path : '/service/demoTahaAppService'
service demoTahaAppService
{
    @odata.draft.enabled
    entity Employee as
        projection on my.Employee;
}

annotate demoTahaAppService with @requires :
[
    'authenticated-user'
];
