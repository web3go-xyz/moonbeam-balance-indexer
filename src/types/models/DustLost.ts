// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class DustLost implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockNumber?: bigint;

    public accountId: string;

    public totalBalanceBeforeDestroy?: bigint;

    public aid: bigint;

    public timestamp?: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save DustLost entity without an ID");
        await store.set('DustLost', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove DustLost entity without an ID");
        await store.remove('DustLost', id.toString());
    }

    static async get(id:string): Promise<DustLost | undefined>{
        assert((id !== null && id !== undefined), "Cannot get DustLost entity without an ID");
        const record = await store.get('DustLost', id.toString());
        if (record){
            return DustLost.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<DustLost, FunctionPropertyNames<DustLost>>> & Entity): DustLost {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new DustLost(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
