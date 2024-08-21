import React from 'react';
import '../styles/Header.scss';

function Header() {
    return (
        <div className="header">
            <h2>모리로 무비</h2>

            <div className="util-container">
                <button>낮밤모드</button>
                <button>검색</button>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </div>
    );
}

export default Header;
