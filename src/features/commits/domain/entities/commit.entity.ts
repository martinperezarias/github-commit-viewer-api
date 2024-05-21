export class CommitData {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author: CommitDataAuthor;
    committer: CommitDataAuthor;
    parents: any[];
}

export class CommitDataAuthor {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export class Commit {
    author: CommitAuthor;
    committer: CommitAuthor;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
}

export class CommitAuthor {
    name: string;
    email: string;
    date: Date;
}

export class Tree {
    sha: string;
    url: string;
}

export class Verification {
    verified: boolean;
    reason: string;
    signature: any;
    payload: any;
}