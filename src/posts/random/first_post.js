import { H1, P, Code } from '../template';

const code1 = `import React from 'react';

console.log(React);
`;

const post = (<>
<H1 text={'인사드립니다'} />
<P text={'안녕하세요? 알고리즘 트레이딩 관련 블로그글을 작성하고 있는 알트입니다.'} />
<P text={'알고리즘 트레이딩을 수년간 해오다 더 다양한 사람과 방법론을 접하고 싶어서 블로그 작성을 시작하게 되었습니다.'} />
<Code language={'javascript'} code={code1} />
</>);

const first_post = {
    category: 'random',
    slug: 'first_post',
    upload_date: '20220201',
    upload_time: '160400',
    title: '인사드립니다!',
    summary: '블로그 시작하면서 인사드립니다.',
    writer: '알트',
    post: post,
};

export default first_post;