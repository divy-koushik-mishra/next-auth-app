import {connect} from '@/db/db.config'
import User from '@/models/user.models'
import {NextRequest, NextResponse} from 'next/server'

connect()

export async function POST(request:NextRequest) {
    try {
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}   