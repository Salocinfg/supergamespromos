# 🚀 Deploy Guide - SuperGamePromos

## ✅ Configuração Completa

O projeto está configurado para fazer **deployment automático via GitHub Actions + Vercel**!

### O que foi configurado:

1. **GitHub Actions Workflow** (`.github/workflows/deploy-vercel.yml`)
   - Faz trigger automático ao fazer push para `main` ou `master`
   - Deploy para produção no Vercel

2. **Vite Config** (vite.config.ts)
   - Configurado com `GITHUB_PAGES` environment variable para suportar path base
   - Pronto para deploy

3. **Git Config** ✓
   - Email: `flakespo741@gmail.com`
   - Usuário: `salocinfg`

---

## 🔧 Como Configurar o Vercel

### Passo 1: Criar Conta no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Faça login com sua conta GitHub (use a mesma: `Salocinfg`)

### Passo 2: Criar Secrets no GitHub
1. Vá para seu repositório → **Settings** → **Secrets and variables** → **Actions**
2. Adicione 3 secrets:
   - `VERCEL_TOKEN`: [Gerar aqui](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: Pode pegar no dashboard do Vercel
   - `VERCEL_PROJECT_ID`: Será criado automaticamente ou você pega do projeto no Vercel

### Passo 3: Conectar o Repositório ao Vercel
1. No Vercel, clique em "Add New" → "Project"
2. Selecione o repositório `supergamespromos`
3. Configure com as settings padrão (Vite + Node.js)
4. Deploy!

### Passo 4: Testar o Deploy
```bash
# Fazer um commit e push
git add .
git commit -m "test: deploy"
git push

# Acompanhar em: https://github.com/Salocinfg/supergamespromos/actions
```

---

## 📝 URLs Após Deploy

- **Production**: `https://seu-projeto.vercel.app`
- **GitHub**: `https://github.com/Salocinfg/supergamespromos`
- **Actions**: `https://github.com/Salocinfg/supergamespromos/actions`

---

## 💡 Dicas

- **Automatic Deployments**: Cada push para `main`/`master` faz deploy automático
- **Preview Deployments**: Pull requests geram URLs temporárias para preview
- **Rollback**: Você pode fazer rollback de qualquer deploy no dashboard do Vercel
- **Logs**: Acompanhe os logs em `https://github.com/Salocinfg/supergamespromos/actions`

---

## ❌ Por que não GitHub Pages?

GitHub Pages é para **sites estáticos puros**. Como este projeto usa:
- **TanStack Start** (SSR - Server-Side Rendering)
- **Nitro** para servir conteúdo dinâmico

O **Vercel** é a melhor opção porque:
- ✅ Suporta SSR nativamente
- ✅ Serverless functions automáticas
- ✅ Deploys super rápidos
- ✅ Integração perfeita com Vite + React

---

## 🎯 Próximos Passos

1. Criar conta no Vercel
2. Adicionar os 3 secrets no GitHub
3. Fazer um push e acompanhar o deploy
4. Acessar a URL do Vercel

**Pronto! 🚀**
