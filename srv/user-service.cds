using { demoTahaApp as my } from '../db/schema.cds';

@path : '/api/user'
service userInfoService
{
    @odata.draft.enabled
    entity User as projection on my.User;
    action getUserInfo(userId: String) returns User;
}
