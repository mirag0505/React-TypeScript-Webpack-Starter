import { ROOT_ROUTER_PATH } from '@constants/RootRouter'
import React, { lazy, Suspense, useMemo } from 'react'
import { Route, Switch } from 'react-router'

export const AppRouter: React.FC = (): JSX.Element => {
  const HOME_PAGE = useMemo(() => lazy(() => import('./pages/home')), [])
  const INFO_PAGE = useMemo(() => lazy(() => import('./pages/info')), [])
  const NOT_FOUND_PAGE = useMemo(
    () => lazy(() => import('./pages/notFound')),
    []
  )

  return (
    <Suspense fallback={<>Loading</>}>
      <Switch>
        {/*<Redirect from={} to={} exact />*/}
        <Route path={ROOT_ROUTER_PATH.home} component={HOME_PAGE} exact />
        <Route path={ROOT_ROUTER_PATH.info} component={INFO_PAGE} exact />
        <Route component={NOT_FOUND_PAGE} />
      </Switch>
    </Suspense>
  )
}
