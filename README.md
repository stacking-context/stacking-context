# Stacking Context
Page to understand and test css Stacking context


# Creación del repositorio

git init
git add -A
git commit -m "Primer commit"
git remote add origin https://github.com/<username>/<nombre-repositorio>.git
git push origin master

# Creación de rama gh-pages
git checkout -b gh-pages
git push origin gh-pages
git checkout master # Importante! Volver a master para no hacer cambios directamente en gh-pages
# Nuevos cambios en master branch
git add -A
git commit -m "Cambio en ..."
git push origin master

# Actualizar gh-pages
git checkout gh-pages
git merge master
git push origin gh-pages
git checkout master # Importante! Siempre vuelve a master para no hacer cambios directamente en gh-pages
