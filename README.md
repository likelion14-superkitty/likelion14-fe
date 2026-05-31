# 🦁 2인 퍼블리싱 협업 실습 프로젝트

## 📌 프로젝트 소개
React와 styled-components를 활용하여 웹 페이지를 퍼블리싱하고,  
Git/GitHub 협업 흐름을 연습하기 위한 2인 협업 프로젝트입니다.

## 🚀 기술 스택
- React
- JavaScript
- styled-components
- react-router-dom
- Vite
- Git / GitHub

## ✨ 주요 기능
- React 기반 페이지 퍼블리싱 구현
- 공통 컴포넌트 분리 및 재사용성 고려
- react-router-dom 기반 라우팅 구현
- styled-components 기반 스타일링 구현
- map 함수를 활용한 데이터 렌더링 구현
- GitHub 협업 및 브랜치 전략 실습
- Pull Request 기반 협업 흐름 실습

## 🎯 목표
- Figma 디자인을 React 코드로 구현하기
- 컴포넌트 단위로 UI 분리하기
- 공통 컴포넌트를 활용한 재사용성 높이기
- react-router-dom을 활용한 라우팅 구현하기
- styled-components를 활용한 스타일링 연습
- Git 브랜치 전략과 협업 흐름 익히기
- 코드 리뷰 및 Pull Request 경험하기
- GitHub Organization 협업 경험하기

## 🎯 Git Convention
- 🎉 Start: Start New Project [:tada:]
- ✨ Feat: 새로운 기능 추가 [:sparkles:]
- 🐛 Fix: 버그 수정 [:bug:]
- 🎨 Design: UI 스타일 변경 [:art:]
- ♻️ Refactor: 코드 리팩토링 [:recycle:]
- 🔧 Settings: 설정 파일 수정 [:wrench:]
- 🗃️ Comment: 주석 추가 및 변경 [:card_file_box:]
- ➕ Dependency/Plugin: 라이브러리 추가 [:heavy_plus_sign:]
- 📝 Docs: 문서 수정 [:memo:]
- 🔀 Merge: 브랜치 병합 [:twisted_rightwards_arrows:]
- 🚀 Deploy: 배포 관련 작업 [:rocket:]
- 🚚 Rename: 파일 및 폴더 이름 수정 [:truck:]
- 🔥 Remove: 파일 삭제 [:fire:]
- ⏪️ Revert: 이전 버전으로 롤백 [:rewind:]

## 🌲 Branch Convention
- main : 최종 배포 브랜치
- develop : 개발 브랜치
- feat/#이슈번호/기능명
  - 예: feat/#12/login-page
- ui/#이슈번호/컴포넌트명
  - 예: ui/#15/header-component
- refactor/#이슈번호/기능명
  - 예: refactor/#20/component-structure

## 🌊 Flow
1. Issue 생성
2. 최신 develop 브랜치 pull
3. 작업 브랜치 생성
4. 기능 개발 및 commit 진행
5. develop 브랜치로 Pull Request 생성
6. 코드 리뷰 진행
7. 리뷰 완료 후 develop 브랜치로 merge
8. 작업 브랜치 삭제