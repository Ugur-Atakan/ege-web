import { connectDB } from '@/app/lib/db/mongodb';
import Workspace from '@/app/lib/db/models/WorkspaceModel';
import User from '@/app/lib/db/models/UserModel';

export async function GET(request) {
    const email = request.nextUrl.searchParams.get('email');
    await connectDB();

    try {
        // Check if user exists in the users collection; if not, return 404
        const user = await User.findOne({ email });
        if (!user) {
            return new Response('User not found', { status: 404 });
        }

        // Find the workspace in which the user exists and return the workspace
        const workspace = await Workspace.findOne({ users: { $in: [user._id] } });
        if (!workspace) {
            return new Response('Workspace not found for the user', { status: 404 });
        }

        if (!workspace.companies) {
            return new Response('Companies not found in workspace', { status: 404 });
        }

        return new Response(JSON.stringify(workspace.companies), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.log(err);
        return new Response(`Error retrieving workspace: ${err}`, {
            status: 500,
        });
    }
}
