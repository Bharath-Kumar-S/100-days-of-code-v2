# Git: Merge vs Rebase

This document explains the differences between `git merge` and `git rebase`, including their pros, cons, and recommended use cases.

---

## Overview

| Aspect | Merge | Rebase |
|--------|-------|--------|
| History | Preserved | Rewritten |
| Commit graph | Non-linear | Linear |
| Safety | Very safe | Risky if misused |
| Conflicts | Resolved once | May occur multiple times |
| Team usage | Ideal | Use with caution |

---

## git merge

### Description
Combines two branches by creating a merge commit that preserves the complete history.

### Command
```bash
git checkout main
git merge feature-branch
```

### Pros
- Preserves full commit history
- Safe for shared branches
- Clear audit trail
- Easier for team collaboration

### Cons
- Creates extra merge commits
- Can clutter commit history
- Harder to read long-term logs

### Recommended Use Cases
- Merging into main or develop
- Shared or long-lived branches
- Team-based workflows
- When history accuracy matters

---

## git rebase

### Description
Moves commits from one branch on top of another by rewriting commit history.

### Command
```bash
git checkout feature-branch
git rebase main
```

### Pros
- Produces a clean, linear history
- Easier to read git log
- Avoids unnecessary merge commits

### Cons
- Rewrites commit history
- Dangerous on shared branches
- Conflicts may need repeated resolution
- Can cause issues for collaborators

### Recommended Use Cases
- Local feature branches
- Solo development
- Cleaning commit history before merging

---

## Golden Rule
⚠️ **Never rebase a branch that has already been pushed and is used by others.**

---

## Recommended Workflow

```bash
# Update feature branch
git checkout feature
git rebase main

# Merge when ready
git checkout main
git merge feature
```

This keeps history clean while maintaining safety.

---

## Interactive Rebase (Optional)

```bash
git rebase -i HEAD~N
```

Use interactive rebase to:
- Squash commits
- Edit commit messages
- Remove unnecessary commits

⚠️ **Only use on unpublished commits.**

---

## Summary
- Use rebase to prepare and clean up your work
- Use merge to integrate work into shared branches

---

## References
- [git-merge Documentation](https://git-scm.com/docs/git-merge)
- [git-rebase Documentation](https://git-scm.com/docs/git-rebase)
